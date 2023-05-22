import React, { useState } from "react";
import SolveTable from "../components/SolveTable"


const Home = () => {
	const [loading, setloading] = useState(false);

	document.body.className = 'dark-theme';


	// todo:
	// - color coding parts
	// - randomize vocab
	// - randomized practice at the end
	// - explanations

	return (loading ? <div><h1>Loading...</h1></div> :
		<div className="container">
			<SolveTable
				title={'Correctly conjugate the following phrases using 寒い:'}
				headers={[
					'Conversation',
					'It is cold (寒い)',
					'It was cold (寒い)',
				]}
				answers={[
					[
						'Casual',
						'Polite',
					],
					[
						'寒い',
						'寒いです',
					],
					[
						'寒かった',
						'寒かったです',
					],
				]} />
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
			<SolveTable
				title={'Conjugate the following phrases using 静か:'}
				headers={[
					'Conversation',
					'It is quiet (静か)',
					'It was quiet (静か)',
				]}
				answers={[
					[
						'Casual',
						'Polite',
					],
					[
						'静かだ',
						'静かです',
					],
					[
						'静かだった',
						'静かでした',
					],
				]} />
			<SolveTable
				title={'Correctly conjugate the following phrases using 静か:'}
				headers={[
					'Conversation',
					'It is not quiet (静か)',
					'It was not quiet (静か)',
				]}
				answers={[
					[
						'Casual',
						'Polite',
						'Politest',
					],
					[
						'静かじゃない',
						'静かじゃないです',
						'静かじゃありません',
					],
					[
						'静かじゃなかった',
						'静かじゃなかったです',
						'静かじゃありませんでした',
					],
				]} />
		</div>
	);
}
export default Home


