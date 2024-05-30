type PageContainerProps = {
	children: React.ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
	return <div className={`min-h-screen min-w-screen`}>{children}</div>;
};

export default PageContainer;
