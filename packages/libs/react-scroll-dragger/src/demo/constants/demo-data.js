export default [
  {
    title: 'Basic example',
    description: '',
    codes: [
      {
        language: 'jsx',
        code: `
          <DragScroll>
            {images.map((item, itemIndex) => {
              return (
                <img
                  alt="demo"
                  src={item}
                />
              );
            })}
          </DragScroll>
        `,
      },
    ],
    props: {
      height: 150,
    },
    images: [
      'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg',
      'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg',
      'https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097__340.jpg',
      'https://cdn.pixabay.com/photo/2016/09/07/22/38/cat-1652822__340.jpg',
      'https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793__340.jpg',
      'https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961__340.jpg',
      'https://cdn.pixabay.com/photo/2015/04/17/09/36/domestic-cat-726989__340.jpg',
      'https://cdn.pixabay.com/photo/2013/01/25/13/03/cat-76116__340.jpg',
      'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952__340.jpg',
      'https://cdn.pixabay.com/photo/2017/03/29/09/59/cat-2184682__340.jpg',
    ],
  },
  {
    title: 'Configurable component order',
    description: '',
    codes: [
      {
        language: 'jsx',
        code: `
          <DragScroll componentOrder={["children", "prev_button", "next_button"]}>
            {images.map((item, itemIndex) => {
              return (
                <img
                  alt="demo"
                  src={item}
                />
              );
            })}
          </DragScroll>
        `,
      },
    ],
    props: {
      componentOrder: [
        'children',
        'prev_button',
        'next_button',
      ],
      height: 150,
    },
    images: [
      'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg',
      'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826__340.jpg',
      'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg',
      'https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398__340.jpg',
      'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186__340.jpg',
      'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg',
      'https://cdn.pixabay.com/photo/2017/06/24/09/13/dog-2437110__340.jpg',
      'https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087__340.jpg',
      'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816__340.jpg',
      'https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077__340.jpg',
    ],
  },
  {
    title: '',
    description: '',
    codes: [
      {
        language: 'jsx',
        code: `
          <DragScroll componentOrder={["children"]}>
            {images.map((item, itemIndex) => {
              return (
                <img
                  alt="demo"
                  src={item}
                />
              );
            })}
          </DragScroll>
        `,
      },
    ],
    props: {
      componentOrder: [
        'children',
      ],
      height: 150,
    },
    images: [
      'https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616__340.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg',
      'https://cdn.pixabay.com/photo/2014/12/14/12/26/evening-567840__340.jpg',
      'https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg',
      'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/01/tree-736888__340.jpg',
      'https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098__340.jpg',
      'https://cdn.pixabay.com/photo/2012/10/30/15/55/hayden-valley-63564__340.jpg',
      'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg',
      'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg',
    ],
  },
  {
    title: 'Custom styles',
    description: '',
    codes: [
      {
        language: 'jsx',
        code: `
          <DragScroll>
            {images.map((item, itemIndex) => {
              return (
                <img
                  alt="demo"
                  src={item}
                />
              );
            })}
          </DragScroll>
        `,
      },
      {
        language: 'scss',
        code: `
          .react-scroll-dragger__btn {
            &--inactive {
              opacity: .25 !important;
            }
          }
        `,
      },
    ],
    props: {
      height: 150,
    },
    images: [
      'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg',
      'https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg',
      'https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097__340.jpg',
      'https://cdn.pixabay.com/photo/2016/09/07/22/38/cat-1652822__340.jpg',
      'https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793__340.jpg',
      'https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961__340.jpg',
      'https://cdn.pixabay.com/photo/2015/04/17/09/36/domestic-cat-726989__340.jpg',
      'https://cdn.pixabay.com/photo/2013/01/25/13/03/cat-76116__340.jpg',
      'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952__340.jpg',
      'https://cdn.pixabay.com/photo/2017/03/29/09/59/cat-2184682__340.jpg',
    ],
  },
];
