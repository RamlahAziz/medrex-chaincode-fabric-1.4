# medrex-chaincode-fabric-1.4
The chaincode for medrex in Hyperledger Fabric 1.4
Collaborators: Ramlah Aziz and Zeyad Ahmed

# Instructions
These instructions are for creating all these files. You need not follow them to deploy the blockchain, just copy the entire folder and deploy it

I created the files configtx.yaml and crypto-config.yaml inside first-network/network directory

Then  I opened the terminal in this directory and executed

$ cryptogen generate --config=./crypto-config.yaml

Then I made first-network/network/config dir

Create config/genesis.block by executing the following command in network dir

$ configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./config/genesis.block

Generate channel.tx (.tx is a configuration transaction) file using profile TwoOrgsChannel defined in configtx and name channel mychannel

$ configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./config/channel.tx -channelID mychannel

Now we need to create anchor peer .tx files

$ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./config/Org1MSPanchors.tx -channelID mychannel -asOrg Org1MSP

$ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./config/Org2MSPanchors.tx -channelID mychannel -asOrg Org2MSP

Then created and edited the docker file. This needs to be edited. I think we should look at Jawad's and byfn for this


ERROR: cryptogen: no such command
SOLUTION:
Make sure your binaries are in the local path by opening ~/.bashrc or ~/.profile and adding the following line at the end

export PATH=~/fabric-samples/bin:$PATH

Then save and exit and execute source ~/.bashrc or source ~/.profile