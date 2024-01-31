const ServicePage = ({ params }: { params: { service: string } }) => {
    console.log(params);
  return <div>My Service: {params.service}</div>;
};

export default ServicePage;
