const categories = [
  {
    id: 0,
    image:
      'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel on budget'
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Adventure travel'
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/5875846/pexels-photo-5875846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Road trip'
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/2517748/pexels-photo-2517748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Backbacking'
  }
];
const stories = [
  {
    id: 0,
    image:
      'https://images.pexels.com/photos/5554235/pexels-photo-5554235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Buenos Aires vegetarian: the best restaurants ',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts  - bu but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Lucy Lovell',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_1.png'
    }
  },
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/5225474/pexels-photo-5225474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel around the word',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Josie Holcomb',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_2.png'
    }
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel around the word',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Chad Glass',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_3.png'
    }
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Travel around the word',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',
    user: {
      fullName: 'Tiger Tran',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_4.png'
    }
  }
];

const topUsers = [
  {
    id: 0,
    avatar:
      'https://react-material-kit.devias.io/static/images/avatars/avatar_1.png',
    fullName: 'Creation Hill',
    country: 'Minneapolis, MN, USA'
  },
  {
    id: 1,
    avatar:
      'https://react-material-kit.devias.io/static/images/avatars/avatar_2.png',
    fullName: 'Josie Holcomb',
    country: 'Mozambique'
  },
  {
    id: 2,
    avatar:
      'https://react-material-kit.devias.io/static/images/avatars/avatar_3.png',
    fullName: 'Chad Glass',
    country: 'Greenland'
  },
  {
    id: 3,
    avatar:
      'https://react-material-kit.devias.io/static/images/avatars/avatar_4.png',
    fullName: 'Issac Kay',
    country: 'Minneapolis, MN, Germany'
  },
  {
    id: 4,
    avatar:
      'https://react-material-kit.devias.io/static/images/avatars/avatar_5.png',
    fullName: 'Zishan Skinner',
    country: 'Minneapolis, MN, USA'
  }
];

const videos = [
  {
    id: 0,
    title: 'Travel around the word',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',

    url:
      'https://www.pexels.com/video/3015510/download/?search_query=travel&tracking_id=emxgyh2mj36',
    user: {
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_2.png',
      fullName: 'Zishan Skinner'
    }
  },
  {
    id: 1,
    title: 'Hot air balloon up in the sky',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',

    url:
      'https://www.pexels.com/video/3015511/download/?search_query=&tracking_id=emxgyh2mj36',
    user: {
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_3.png',
      fullName: 'Chad Glass'
    }
  },
  {
    id: 2,
    title: 'Golden gate bridge at San francisco',
    content:
      'Known as the steak capital of the world, Buenos Aires has a reputation for choice cuts - but there’s more to the city than meaty menus ',

    url:
      'https://www.pexels.com/video/1994828/download/?search_query=travel&tracking_id=emxgyh2mj36',
    user: {
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_1.png',
      fullName: 'Issac Kay'
    }
  }
];

export { stories, topUsers, categories, videos };
