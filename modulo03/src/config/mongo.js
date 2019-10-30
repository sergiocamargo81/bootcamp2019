import host from './host';

export default [
  `mongodb://${host}:27017/gobarber`,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
];
