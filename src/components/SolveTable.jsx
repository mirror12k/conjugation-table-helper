import React, { useState } from "react";



const range = i => [ ...Array(i).keys() ];
const filter_text = s => s.replaceAll('。', '').replaceAll('　', '').replaceAll(' ', '');

export default ({ title, headers, answers }) => {
	const [loading, setloading] = useState(false);


	const [textmap, settextmap] = useState(
		range(answers[0].length)
			.flatMap(y => range(answers.length).map(x => `row:${x},${y}`))
			.reduce((acc, cur) => {
				acc[cur] = '';
				return acc;
			}, {}));

	const settext = (key, value) => {
		textmap[key] = value;
		settextmap({ ...textmap });
	};


	return <>
		<div>
			<h3>{title}</h3>
		</div>
		<br />
		<div>
			<table className="table table-dark">
				<thead>
					<tr>
						{ headers.map(header => <th scope="col" key={header}>{header}</th>) }
					</tr>
				</thead>
				<tbody>
					{ range(answers[0].length).map(y => 
						<tr key={y}>{ range(answers.length).map(x =>
							(x === 0
								? <th key={`row:${x},${y}`} scope="row">{answers[x][y]}</th>
								: <td key={`row:${x},${y}`}>
									<input className="form-control d-inline" style={{ background: 'none', width: '95%' }} type="text"
										value={textmap[`row:${x},${y}`]}
										onChange={e => settext(`row:${x},${y}`, e.target.value)} />
									<span id={`row:${x},${y}:check`}
										className={ filter_text(textmap[`row:${x},${y}`]) === answers[x][y] ? "d-inline" : "d-none" }>✅</span>
								</td>)
						) }</tr>
					) }
				</tbody>
			</table>
		</div>
	</>;
}

