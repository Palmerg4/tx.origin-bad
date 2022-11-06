# Tx.origin Exploit

By calling the `attack()` function, the owner is tricked into relinquishing ownership to the Attack contract. Because the ownership check is using `tx.origin`, the ownership check succeeds. `addr1` is the address tx.origin returns, the malicious contract will be the address passed as `newOwner`

# Prevention

Instead of using `tx.origin`, the ownership check should be using `msg.sender`

```shell
npm install
npx hardhat test
```
