import React from 'react';
import './Stats.scss';

interface IStatsControlProps {
    label?: string;
    data?: string;
}

const Stats = (props: IStatsControlProps) => {
    const { label = '', data = '' } = props;
    return (
        <div>
            <div className="mt-5 grid grid-cols-6">
                <div className="bg-white overflow-hidden shadow rounded-lg col-start-2 col-span-3">
                    <div className="px-4 py-5 sm:p-6">
                        <dl>
                            <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                                {label}
                            </dt>
                            <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
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
