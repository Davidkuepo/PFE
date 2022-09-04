import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import Navbars from '../components/Navbars';
import Footer from '../components/Footer';
import Textarea from '@material-tailwind/react/Textarea';
export default function Parametre() {
    return (
        <Card>
           <Navbars/>
            <CardBody>
                <form class="py-8">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-black text-2xl">My Account</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }} class="bg-blue-500 h-8 px-3 rounded-lg border-white border-6 text-white"
                    >
                        Send
                    </Button></div>
                    <h6 className="text-blue-500 text-sm mt-3 mb-6 font-light uppercase">
                        User Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="blue"
                                placeholder="Username"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="email"
                                color="blue"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="blue"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="email"
                                color="blue"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <h6 className="text-blue-500 text-sm my-6 font-light uppercase">
                        Contact Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <Input
                                type="text"
                                color="blue"
                                placeholder="Address"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="blue"
                                placeholder="City"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="blue"
                                placeholder="Country"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="blue"
                                placeholder="Postal Code"
                            />
                        </div>
                    </div>
                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        About Me
                    </h6>
                    <div className="flex flex-wrap mt-10 font-light">
                        <Textarea color="purple" placeholder="About Me" />
                    </div>
                </form>
            </CardBody>
            <Footer/>
        </Card>
    );
}
