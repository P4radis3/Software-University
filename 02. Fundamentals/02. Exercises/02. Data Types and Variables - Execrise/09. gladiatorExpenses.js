function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){

    const helmets = ~~(lostFights / 2) * helmetPrice;
    const swords = ~~(lostFights / 3) * swordPrice;
    const shields = ~~(lostFights / 6) * shieldPrice;
    const armors = ~~(lostFights / 12) * armorPrice;

    const price = helmets + swords + shields + armors;

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);

}