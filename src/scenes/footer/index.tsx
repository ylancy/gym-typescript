import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-primary-100 py-16 mt-40'>
            <div className='md:flex justify-center w-5/6 gap-20 mx-auto'>
                <div className="basis-1/2 mt-14">
                    <img src={Logo} alt='logo' />
                    <p className="my-5">Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.</p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-14 basis-1/4">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-14 basis-1/4">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer