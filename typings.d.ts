type AudioClip = {
  description?: string;
  file: {
    asset: {
      _type: string;
      mimeType: string;
      url: string;
      _updatedAt: string;
      assetId: string;
      extension: string;
      uploadId: string;
      _id: string;
      originalFilename: string;
      _rev: string;
      sha1hash: string;
      path: string;
      size: number;
      _createdAt: string;
    };
  };
  _createdAt: string;
  _type: string;
  soundcloud_link?: string;
  _id: string;
  _rev: string;
  title: string;
  _updatedAt: string;
  duration?: number;
};

  
type AudioBook = {
  _id: string;
  _createdAt: string;
  _type: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  author: string;
  description: string;
  image: {
    _type: string;
    alt: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  file: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  audible_link: string;
  duration: number;
}

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}


type AudioDemo = {
  _createdAt: string;
  _rev: string;
  _type: 'audioDemo';
  description: string;
  _id: string;
  title: string;
  _updatedAt: string;
  file: {
    asset: {
      _createdAt: string;
      originalFilename: string;
      uploadId: string;
      sha1hash: string;
      assetId: string;
      extension: string;
      _updatedAt: string;
      _type: 'sanity.fileAsset';
      url: string;
      size: number;
      _id: string;
      _rev: string;
      mimeType: string;
      path: string;
    };
  };
};