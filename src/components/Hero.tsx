import { ButtonLink as Button, ButtonLink } from "./Button";

export const Hero = () => (
  <div className="bg-indigo-700">
    <div className="container space-x-2">
      <div className="w-1/2 text-white">
        <p className="small-caps">Subtitle</p>
        <h1>Hero Title</h1>
        <p>Subtitle goes here whatever it is</p>
        <div>
          <ButtonLink href="">Go here</ButtonLink>
          <ButtonLink href="">Go here</ButtonLink>
        </div>
      </div>
      <div className="w-1/2">
          <img src="/static/credit-card.png">
          </img>
      </div>
    </div>
  </div>
);
