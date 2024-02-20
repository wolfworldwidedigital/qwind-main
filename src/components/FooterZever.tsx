import { component$ } from "@builder.io/qwik";


export const MyComponent = component$(() => {
  return (
    <div class="flex justify-center items-center px-16 py-12 w-full bg-slate-950 max-md:px-5 max-md:max-w-full">
      <div class="flex flex-col mt-44 mb-24 max-w-full w-[1287px] max-md:my-10">
        <div class="flex gap-5 justify-between w-full text-xl tracking-tight leading-8 text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        </div>
        <div class="flex gap-5 justify-between items-start mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div class="flex flex-col flex-1 text-base">
            <div class="text-xl font-medium tracking-tight text-white">
              About
            </div>
            <div class="mt-10 leading-7 text-white">
              At vero eoset accusamus et iusto odio dignissimos ducimus
              blanditiis
              <br />
              praesentium voluptatu dele
            </div>
            <div class="flex gap-2.5 justify-between pr-20 mt-7 text-center text-violet-600 whitespace-nowrap max-md:pr-5">
              <div class="justify-center items-center px-4 h-10 text-white bg-violet-600 rounded-full aspect-square">
                
              </div>
              <div class="justify-center items-center px-3 h-10 bg-white rounded-full aspect-square">
                
              </div>
              <div class="justify-center items-center px-3.5 h-10 bg-white rounded-full aspect-square">
                
              </div>
              <div class="justify-center items-center px-3.5 h-10 bg-white rounded-full aspect-square">
                
              </div>
            </div>
          </div>
          <div class="flex flex-col self-stretch text-white whitespace-nowrap basis-0">
            <div class="text-xl font-medium tracking-tight">Product</div>
            <div class="mt-10 text-base leading-10">
              Features
              <br />
              Integrations
              <br />
              Pricing
              <br />
              Changelog
              <br />
              Roadmap
            </div>
          </div>
          <div class="flex flex-col text-white basis-0">
            <div class="text-xl font-medium tracking-tight">Company</div>
            <div class="mt-9 text-base leading-10">
              About Us
              <br />
              Community
              <br />
              Career’s
              <br />
              Affiliate Program
            </div>
          </div>
          <div class="flex flex-col text-white basis-0">
            <div class="text-xl font-medium tracking-tight">Resources</div>
            <div class="mt-10 text-base leading-10">
              Download Ai
              <br />
              Setting & Privacy
              <br />
              FAQs
              <br />
              Contact Us
            </div>
          </div>
          <div class="flex flex-col flex-1 text-base">
            <div class="text-xl font-medium tracking-tight text-white">
              Newsletter
            </div>
            <div class="justify-center items-start py-6 pr-16 pl-6 mt-10 whitespace-nowrap bg-white rounded-xl text-slate-950 max-md:px-5">
              Email Address
            </div>
            <div class="justify-center px-8 py-5 mt-2.5 font-bold text-white bg-violet-600 rounded-2xl max-md:px-5">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});