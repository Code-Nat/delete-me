export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(n, s, q) {
    // 'n' = name
    // 's' = sellIn
    // 'q' = quality
    this.name = n;
    this.sellIn = s;
    this.quality = q;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(i = [] as Array<Item>) {
    // 'i' = items
    this.items = i;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if ((this.items[i].name != 'Aged Brie') && (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') && (this.items[i].quality > 0) && (this.items[i].name != 'Sulfuras, Hand of Ragnaros') && ()) {
            this.items[i].quality -= 1;
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1;
          if ((this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') && (this.items[i].sellIn < 11) && (this.items[i].quality < 50)) {
                this.items[i].quality += 1;
          }
            if ((this.items[i].sellIn < 6) && (this.items[i].quality < 50)) {
                this.items[i].quality += 1;
            }
          }
        }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -= 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if ((this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') && (this.items[i].quality > 0) && (this.items[i].name != 'Sulfuras, Hand of Ragnaros')) {
              this.items[i].quality -= 1;
          } else {
            this.items[i].quality = 0;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1;
          }
        }
      }
    }
    return this.items;
  }
}
