let CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
let UPDATE_INTERVAL = 60 * 1000;


let app2 = new Vue({

	el: "#app2", 

	data: {
			sooncoming: 'Soon',
			coins: [],
			coinData: {}}, 
	methods: {

		getCoinData: function(){
			let self = this;
			axios.get(CRYPTOCOMPARE_API_URI + "/api/data/coinlist").then(
			(resp)=> {
				this.coinData = resp.data.Data;
				this.getCoins();
				// console.log(this.coinData);
			}).catch((err)=> {
				this.getCoins();
				console.log(err);
			});
			
			}, //end of getCoinData

		getCoins: function(){

			let self = this;
			axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10").then(
				(resp) =>{ this.coins = resp.data;

				}).catch(
				(err)=>{console.log(err)
				});
		}, //end of getCoins Method

		// getCoinImage: function(symbol){
		// 	return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;
		// 	}

		
		}, //end of Methods
	created: function(){
			this.getCoinData();
			console.log('I am the created function and I ran');
		}
});//end of Vue instance

setInterval(() => {
				app2.getCoins();
			}, 
			UPDATE_INTERVAL), console.log('I ran too');

			