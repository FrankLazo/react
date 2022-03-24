import React from 'react';

const JournalEntry = () =>
{
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={
					{
						backgroundSize: 'cover',
						backgroundImage: 'url( https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezqfT5j-jeizMxbj25mOID60i6CgvZdGi_g&usqp=CAU )',
					}
				}
				></div>

			<div className="journal__entry-body">
				<h3 className="journal__entry-title">
					A new day
				</h3>

				<p className="journal__entry-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};

export default JournalEntry;
