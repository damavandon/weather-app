import Adapter from "../Adapter";
import InterfaceProvider from "../InterfaceProvider";
import Location from "../InterfaceProvider";
import axios from 'axios';
namespace Provider {
    /**
     * Represents a WeatherAPI provider that implements the InterfaceProvider interface.
     */
    export class WeatherAPI extends Adapter implements InterfaceProvider {
        private key: string;
        private requestURL: string = "http://api.weatherapi.com/v1";
        protected version: string;

        /**
         * Creates a new instance of the WeatherAPI class.
         * @param key The API key for accessing the WeatherAPI service.
         */
        constructor(key: string) {
            super();
            this.key = key;
            this.version = "1.0.0";
        }


        /**
         * Retrieves the current weather for the specified location.
         * @param location The location for which to retrieve the weather.
         * @returns An  array.
         */
        current(location: Location): [] {
            return [];
        }

        /**
         * Retrieves the historical weather data.
         * @returns An array of historical weather data.
         */
        History(): [] {
            return [];
        }
    }
}

export default Provider.WeatherAPI;
