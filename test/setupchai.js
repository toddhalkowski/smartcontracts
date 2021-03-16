"use strict";
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
const _deploy_contracts = require("../migrations/2_deploy_contracts");
chai.use(chaiAsPromised);
module.exports = chai;