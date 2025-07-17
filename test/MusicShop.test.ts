import { loadFixture, ethers, expect } from "./setup";

describe("MusicShop", function() {
  async function deploy() {
    const [owner, buyer] = await ethers.getSigners();

    const MusicShop = await ethers.getContractFactory("MusicShop");
    const shop = await MusicShop.deploy(owner.address);
    await shop.waitForDeployment();

    return { shop, owner, buyer };
  }

  it("should allow to add albums", async function () {
    const { shop } = await loadFixture(deploy); 
  })
});