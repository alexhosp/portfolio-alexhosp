const ProjectCaseStudyPage = ({ params }: { params: { project: string } }) => {
  return <h1>My Project: {params.project}</h1>;
};
export default ProjectCaseStudyPage;
