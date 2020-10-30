import React from 'react';
import './Stats.scss';

interface IStatsControlProps {
	label?: string;
	data?: string;
	color?: string;
}

const Stats = (props: IStatsControlProps) => {
	const { label = '', data = '', color = 'gray' } = props;
	return (
		<div>
			<div className="mt-5">
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dl>
							<dt className="text-sm leading-5 font-medium text-gray-500 truncate">
								{label}
							</dt>
							<dd
								className={`mt-1 text-3xl leading-9 font-semibold text-${color}-900`}
							>
								{data}
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
