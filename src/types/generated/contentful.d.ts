// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAuthorFields {
  /** Name */
  name: string;

  /** Avatar */
  avatar?: Asset | undefined;
}

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "author";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogCardsSectionFields {
  /** title */
  title?: string | undefined;

  /** posts */
  posts: IPost[];
}

export interface IBlogCardsSection extends Entry<IBlogCardsSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "BlogCardsSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IButtonFields {
  /** Button Text */
  buttonText: string;

  /** Link */
  link: string;

  /** Secondary */
  secondary: boolean;
}

export interface IButton extends Entry<IButtonFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "button";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICreditCardFields {
  /** Card Name */
  cardName: string;

  /** Category */
  category: "Rewards" | "Qantas Rewards" | "Low Annual Fee" | "Low Rate";

  /** Special Offers */
  specialOffers?: ISpecialOffer[] | undefined;

  /** Standard Purchase Rate */
  standardPurchaseRate: number;

  /** Cash Advance Rate */
  cashAdvanceRate: number;

  /** Card Fee */
  cardFee?: number | undefined;

  /** Interest Free Days */
  interestFreeDays: number;

  /** Minimum Credit Limit */
  minimumCreditLimit: number;
}

export interface ICreditCard extends Entry<ICreditCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "creditCard";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFaqFields {
  /** Question */
  question: string;

  /** Answer */
  answer: string;

  /** Category */
  category: ("general" | "credit cards")[];
}

export interface IFaq extends Entry<IFaqFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "faq";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFaqSectionFields {
  /** title */
  title: string;

  /** FAQs */
  faqs: IFaq[];
}

export interface IFaqSection extends Entry<IFaqSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "FAQSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFeatureDetailFields {
  /** Icon */
  icon: string;

  /** Title */
  title: string;

  /** Body */
  body: string;
}

export interface IFeatureDetail extends Entry<IFeatureDetailFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "FeatureDetail";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFeatureDetailsSectionFields {
  /** title */
  title?: string | undefined;

  /** Feature Details */
  featureDetails: IFeatureDetail[];
}

export interface IFeatureDetailsSection
  extends Entry<IFeatureDetailsSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "FeatureDetailsSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHeroSectionFields {
  /** Title */
  title: string;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Accent Text */
  accentText?: string | undefined;

  /** Buttons */
  buttons?: IButton[] | undefined;

  /** Image */
  image?: Asset | undefined;
}

export interface IHeroSection extends Entry<IHeroSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "HeroSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IIntroTextSectionFields {
  /** Title */
  title?: string | undefined;

  /** body */
  body: string;
}

export interface IIntroTextSection extends Entry<IIntroTextSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "IntroTextSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Page Title */
  pageTitle: string;

  /** Slug */
  slug: string;

  /** Content */
  content: (
    | IBlogCardsSection
    | IFaqSection
    | IFeatureDetailsSection
    | IHeroSection
    | IIntroTextSection
    | IQuickLinksSection
    | ISimpleFeatureSection
  )[];
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Publish Date */
  publishDate: string;

  /** Tags */
  tags?: ("Engineering" | "Marketing")[] | undefined;

  /** Hero Image */
  heroImage?: Asset | undefined;

  /** Description */
  description?: string | undefined;

  /** Body */
  body: Document;

  /** Author */
  author: IAuthor;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IQuickLinkFields {
  /** title */
  title: string;

  /** link */
  link: string;

  /** Icon */
  icon: string;
}

export interface IQuickLink extends Entry<IQuickLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "quickLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IQuickLinksSectionFields {
  /** title */
  title?: string | undefined;

  /** links */
  links: IQuickLink[];
}

export interface IQuickLinksSection extends Entry<IQuickLinksSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "QuickLinksSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IRedirectsFields {
  /** redirects */
  redirects: Record<string, any>;
}

export interface IRedirects extends Entry<IRedirectsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "redirects";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IReleaseNoteFields {
  /** Version */
  version: string;

  /** Category */
  category: "Marketing Site" | "App" | "SDK" | "Open Banking API";

  /** Release Date */
  releaseDate: string;

  /** Description */
  description?: string | undefined;

  /** Scope */
  scope: (
    | "bug fixes"
    | "enhancements"
    | "performance"
    | "security"
    | "features"
  )[];
}

export interface IReleaseNote extends Entry<IReleaseNoteFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "releaseNote";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISimpleFeatureSectionFields {
  /** title */
  title?: string | undefined;

  /** features */
  features: string[];
}

export interface ISimpleFeatureSection
  extends Entry<ISimpleFeatureSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "SimpleFeatureSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISpecialOfferFields {
  /** Title */
  title?: string | undefined;

  /** details */
  details?: string | undefined;
}

export interface ISpecialOffer extends Entry<ISpecialOfferFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "specialOffer";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "author"
  | "BlogCardsSection"
  | "button"
  | "creditCard"
  | "faq"
  | "FAQSection"
  | "FeatureDetail"
  | "FeatureDetailsSection"
  | "HeroSection"
  | "IntroTextSection"
  | "page"
  | "post"
  | "quickLink"
  | "QuickLinksSection"
  | "redirects"
  | "releaseNote"
  | "SimpleFeatureSection"
  | "specialOffer";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
