// Price constants
const PRICES = {
    ESPRESSO: 2.00, // per shot
    MILK: 0.25,     // per 100ml
    PUMPS: 0.50     // per pump
};

// Conversion constants
const CONVERSION = {
    OZ_TO_ML: 29.5735
};

export function calculateLattePrice(espressoShots, milkMl, pumps) {
    // Convert milk from ml to 100ml units for pricing
    const milkUnits = milkMl / 100;
    
    // Calculate costs
    const espressoCost = espressoShots * PRICES.ESPRESSO;
    const milkCost = milkUnits * PRICES.MILK;
    const pumpsCost = pumps * PRICES.PUMPS;

    // Calculate and return total
    return espressoCost + milkCost + pumpsCost;
}

// Helper function to convert ounces to milliliters
export function ozToMl(oz) {
    return oz * CONVERSION.OZ_TO_ML;
} 