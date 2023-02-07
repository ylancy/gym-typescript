export enum PageTypes {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus'
}

export interface ClassType {
    name: string,
    description?: string,
    image: string
}