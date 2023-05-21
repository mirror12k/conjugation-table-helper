import React, { useState } from "react";
import SolveTable from "../components/SolveTable"


const Home = () => {
	const [loading, setloading] = useState(false);

	document.body.className = 'dark-theme';


	return (loading ? <div><h1>Loading...</h1></div> :
		<div className="container">
			<SolveTable
				title={'Correctly conjugate the following phrases using 寒い:'}
				headers={[
					'Conversation',
					'It is not cold (寒い)',
					'It was not cold (寒い)',
				]}
				answers={[
					[
						'Casual',
						'Polite',
						'Politest',
					],
					[
						'寒くない',
						'寒くないです',
						'寒くありません',
					],
					[
						'寒くなかった',
						'寒くなかったです',
						'寒くありませんでした',
					],
				]} />
		</div>
	);
}
export default Home


