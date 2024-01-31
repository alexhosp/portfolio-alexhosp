const ServiceCaseStudyPage = ({ params }: { params: { service: string } }) => {
  return <h1>Case Study for Service: {params.service}</h1>;
};
export default ServiceCaseStudyPage;
