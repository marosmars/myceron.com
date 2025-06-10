import { LOCALES } from "@/i18n/intl";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody } from "@heroui/card";

export const dynamicParams = false;
export const dynamic = "force-static";

export function generateStaticParams() {
  return LOCALES.map((lcl) => {
    return { locale: lcl };
  });
}

export default function Home() {
  return (
    <>
      <section className="relative flex sm:h-screen w-full flex-col items-center">
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-cyan-700/50 to-transparent to-40%" />
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-black to-transparent to-50%"/> */}
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-cyan-700/50 to-transparent to-40%" />
        {/* <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-black to-transparent to-30%" /> */}

        <div className="z-10 flex flex-col items-center justify-center">
          <div className="justify-center flex flex-row items-end mt-8 md:mt-10 lg:mt-12 xl:mt-20">
            <Image
              src="/myceron_favico2_crop_transp.png"
              className="min-w-20 max-w-20 md:min-w-48 md:max-w-48 h-auto"
            ></Image>
            <span className="z-10 font-mono tracking-[.25em] text-4xl md:text-6xl font-extrabold mb-2 md:mb-8 ml-[-2] md:ml-[-6]">
              yceron
            </span>
          </div>
          <div className="w-5/6 md:w-3/4 text-center mx-4 my-4 md:my-8 lg:my-12 flex flex-col items-center justify-center">
            <p className="font-mono font-bold text-2xl">
              Engineering Scalable Solutions That Drive Real Results
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Divider className="my-2 w-5/6 md:w-3/4"></Divider>
            <p className="w-5/6 xl:w-3/4 text-center font-mono lg:text-large my-2">
              Myceron is a technology company specializing in the development of
              high-scale enterprise networking applications and consumer-facing
              solutions designed to convert engagement into measurable outcomes.
              With deep expertise in scalable infrastructure and a
              results-driven approach to software design, we build systems that
              meet the demands of enterprise environments while delivering
              AI-powered experiences that turn users into customers.
            </p>
            <p className="w-5/6 xl:w-3/4 text-center font-mono lg:text-large my-2">
              Our team
              combines years of experience in enterprise-grade networking with
              advanced capabilities in large language models (LLMs) and
              image-based AI. From streamlining complex backend operations to
              enhancing user journeys with intelligent, conversion-optimized
              interfaces, Myceron delivers robust, scalable, and
              customer-focused solutions.
            </p>
            <Divider className="my-2 w-1/2"></Divider>
          </div>
          <div className="hidden 2xl:inline">
            <Portfolio></Portfolio>
          </div>
          <div className="hidden 2xl:inline fixed bottom-2">
            <Footer></Footer>
          </div>
        </div>
      </section>
      <section className="2xl:hidden relative flex w-full flex-col items-center">
        <Portfolio />
      </section>
      <section className="2xl:hidden relative flex my-2 w-full flex-col items-center">
        <Footer></Footer>
      </section>
    </>
  );
}

function Footer() {
  return (
    <div>
      <p className="font-mono">Contact: myceron@myceron.com</p>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-8">
      <p className="font-mono mt-4 mb-4 mx-4 text-center font-bold text-2xl">
        Portfolio
      </p>

      <div className="flex mx-4 xl:mx-0 flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-8">
        <Card className="py-4 bg-neutral-900">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Link
              className="font-mono text-2xl text-white underline"
              href="https://www.gardendesigner.ai"
              isExternal
            >
              Gardendesigner.ai
            </Link>
            <p className="my-2">Design your dream garden using AI</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-80 h-auto m-2"
              src="/gd.jpeg"
              isZoomed
            />
          </CardBody>
        </Card>

        <Card className="py-4 bg-neutral-900">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Link
              className="font-mono blur-md text-2xl text-white underline"
              href="https://www.gardendesigner.ai"
              isExternal
              isDisabled
            >
              Gardendesigner.ai
            </Link>
            <p className="my-2 blur-md">Design your dream garden using AI</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-80 h-auto m-2"
              src="/gd.jpeg"
              isLoading
              isBlurred
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
