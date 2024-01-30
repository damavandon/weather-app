export default interface Location{
    latitude:number
    longitude:number,
    cityName:string
}
export default interface InterfaceProvider {
    current(location:Location):[]
    History(): []
}