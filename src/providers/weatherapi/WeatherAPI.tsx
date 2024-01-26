import Adapter from "../Adapter";
import InterfaceProvider from '../InterfaceProvider';

namespace Provider {

    export class WeatherAPI extends Adapter implements InterfaceProvider {
        private key: string
        private requestURL: string = 'http://api.weatherapi.com/v1'
        protected version: string;
        constructor(key: string) {
            super();
            this.key = key
            this.version = '1.0.0'
        }
        current(): [] {
            return []
        }
        History(): [] {
            return []
        }
    }
}

export default Provider.WeatherAPI
