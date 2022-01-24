const { LCDClient, Coin } = require('@terra-money/terra.js');

const terra = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
});

assets = [
    "LUNA",
    "MIR",
    "ANC",
    "ASTRO",
    "VKR",
    "MINE",
    "STT",
    "WHALE",
    "KUJI",
]

let prev = []
let mm = Math.round((Date.now()/1000))

;(async () => {
    while (true) {
        const x = await terra.wasm.contractQuery(
            "terra1kzwzdknntsl957vgd8d8ns75hk6h0cm2cg3c79",
            {"get_reference_data_bulk": {"base_symbols": assets, "quote_symbols": assets.map(_=>"USD") }}
        );
        const now = Math.round((Date.now()/1000))
        const current = x.map(e => now - e["last_updated_base"]).slice(1)

        // console.log(mm ," , ", x[0]['last_updated_base'])

        if (mm !== x[0]['last_updated_base']) {
            console.log("-> ",x[0]['last_updated_base'] - mm)
            mm = x[0]['last_updated_base']
            // console.log(current.join(","))
        }

        console.log(current.join(","))
        prev = [...current]
    }
})()
