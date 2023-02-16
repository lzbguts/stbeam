<template>
    <div class="game-content">
        <div v-if="!is_free">
            <div>
                <Informacao content="Preço do jogo na Steam brasileira." />
                <p>Preço no Brasil: <span>{{ preco_brl }}</span></p>
            </div>
            <div>
                <Informacao content="Preço do jogo na Steam turca." />
                <p>Preço na Turquia: <span>{{ preco_tl }}</span></p>
            </div>
            <div>
                <Informacao content="Preço do jogo convertido de TRY para BRL. (Sem taxas do mercado Steam)" />
                <p>Valor convertido: <span>{{ preco_convertido }}</span></p>
            </div>
            <div>
                <Informacao
                    content="Valor de um item no Skinport para comprar o jogo. (Taxas da Steam de 15% incluídas)" />
                <p>Valor Skinport: <span>{{ preco_skinport }}</span></p>
            </div>
            <div>
                <Informacao
                    content="Valor de venda de um item no mercado turco da Steam para conseguir o valor de compra turco." />
                <p>Valor no mercado Steam turco: <span>{{ preco_mercado }}</span></p>
            </div>
            <div class="total">
                <Informacao
                    content="Preço total do jogo em BRL comprando um item no Skinport e vendendo no mercado turco da Steam. (Taxas IOF de 5.38% incluídas)"
                    size="large" />
                <p>Preço total: <span>{{ preco_total }}</span></p>
            </div>
        </div>
        <div v-else>
            <div class="total">
                <p>Grátis!</p>
            </div>
        </div>
    </div>
</template>

<script>
import Popper from "vue3-popper";
import Informacao from '../Informacao/Informacao.vue'

export default {
    name: "GameContent",
    components: {
        Popper,
        Informacao
    },
    data() {
        return {
            preco_brl: 0,
            preco_tl: 0,
            preco_convertido: 0,
            preco_skinport: 0,
            preco_mercado: 0,
            preco_total: 0,
            is_free: false
        }
    },
    methods: {
        async getPrecos() {
            const id = this.$route.params.id;

            if (isNaN(id)) { this.$router.push("/404"); return; }

            const req = await fetch(`${this.$stbeamAPI}/games/${id}`);
            const data = await req.json();

            if (data.success == false) { this.$router.push("/404"); return; }

            const dados = data.data;

            if (dados.is_free) {
                this.preco_brl = 0;
                this.$emit("recursos", { nome: dados.nome, img: dados.img, screenshots: dados.screenshots, id: id });
                this.is_free = true;
                return;
            }

            const currencies = ["BRL", "TRY"];

            const rates = {};

            for (var c in currencies) {
                await fetch(`${this.$exchangeAPI}/${currencies[c]}`).then(async data => {
                    rates[currencies[c]] = await data.json();
                })
            }

            const brl_to_try = rates["BRL"].rates.TRY;
            const try_to_brl = rates["TRY"].rates.BRL;

            const preco_steam = dados.preco_tl * 1.15 * try_to_brl;

            const fBR = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
            const fTR = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" });

            this.preco_brl = fBR.format(dados.preco_brl);
            this.preco_tl = fTR.format(dados.preco_tl);
            this.preco_convertido = fBR.format((dados.preco_tl * try_to_brl).toFixed(2));
            this.preco_skinport = fBR.format(preco_steam.toFixed(2));
            this.preco_mercado = fTR.format((preco_steam * brl_to_try).toFixed(2));
            this.preco_total = fBR.format((preco_steam + ((preco_steam * 0.0538) * 2)).toFixed(2));

            this.$emit("recursos", { nome: dados.nome, img: dados.img, screenshots: dados.screenshots, id: id });
        }
    },
    mounted() {
        this.getPrecos();
    }
}
</script>

<style src="./GameContent.css">

</style>