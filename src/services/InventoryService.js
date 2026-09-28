class InventoryService {
  constructor() {
    this.assets = [
      {
        id: 1,
        name: "Blue Dream",
        weight: 500,
        value: 18000,
        lowStock: false,
      },
      {
        id: 2,
        name: "OG Kush",
        weight: 687,
        value: 24600,
        lowStock: false,
      },
      {
        id: 3,
        name: "Purple Haze",
        weight: 300,
        value: 10000,
        lowStock: true,
      },
    ];
  }

  getAssets() {
    return this.assets;
  }

  getTotals() {
    return {
      status: "LIVE",
      assets: this.assets.length,
      totalWeight: this.assets.reduce((sum, item) => sum + item.weight, 0),
      inventoryValue: this.assets.reduce((sum, item) => sum + item.value, 0),
      lowStockAlerts: this.assets.filter((item) => item.lowStock).length,
      items: this.assets,
      lastUpdated: new Date().toISOString(),
    };
  }

  addAsset(asset) {
    this.assets.push({
      id: Date.now(),
      ...asset,
    });

    return this.getTotals();
  }

  removeAsset(id) {
    this.assets = this.assets.filter((item) => item.id !== id);

    return this.getTotals();
  }

  updateAsset(id, updates) {
    this.assets = this.assets.map((item) =>
      item.id === id ? { ...item, ...updates } : item
    );

    return this.getTotals();
  }
}

export default new InventoryService();
