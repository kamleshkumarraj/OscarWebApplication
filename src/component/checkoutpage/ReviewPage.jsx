import React, { useState } from 'react';

const initialReviewsData = [
  { id: 1, initials: 'EH', name: 'Esther Howard', review: 'Completed the task and added the required documentation, can someone please ....' },
  { id: 2, initials: 'WW', name: 'Wade Warren', review: 'Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.' },
  { id: 3, initials: 'BS', name: 'Brooklyn Simmons', review: 'Twenty 30-second applications within half an hour is well in excess.' },
  { id: 4, initials: 'RF', name: 'Robert Fox', review: 'An interesting implication of the 2007 study concerns the use of hand sanitizers.' },
  // Add more reviews as needed...
];

const ReviewPage = () => {
  const [reviews, setReviews] = useState(initialReviewsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionMenuOpen, setActionMenuOpen] = useState(null);
  const [editReviewId, setEditReviewId] = useState(null);
  const [editedReviewText, setEditedReviewText] = useState('');

  const reviewsPerPage = 4;

  const filteredReviews = reviews.filter(review =>
    review.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleActionClick = (id) => {
    setActionMenuOpen(actionMenuOpen === id ? null : id);
  };

  const handleEditReview = (id, currentReviewText) => {
    setEditReviewId(id);
    setEditedReviewText(currentReviewText);
    setActionMenuOpen(null);
  };

  const handleSaveEdit = () => {
    if (editReviewId !== null) {
      setReviews(prevReviews =>
        prevReviews.map(review =>
          review.id === editReviewId ? { ...review, review: editedReviewText } : review
        )
      );
      setEditReviewId(null);
      setEditedReviewText('');
    }
    setActionMenuOpen(null);
  };

  const handleDeleteReview = (id) => {
    setReviews(prevReviews => prevReviews.filter(review => review.id !== id));
    setActionMenuOpen(null);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Reviews</h1>
          <input
            type="text"
            placeholder="Search reviews"
            className="mt-4 sm:mt-0 px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Review</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentReviews.map((review) => (
                <tr key={review.id} className="relative">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full">
                      <span className="text-gray-600 font-semibold">{review.initials}</span>
                    </div>
                    <span className="ml-4 text-gray-800">{review.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-gray-600">
                    {editReviewId === review.id ? (
                      <input
                        type="text"
                        value={editedReviewText}
                        onChange={(e) => setEditedReviewText(e.target.value)}
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                      />
                    ) : (
                      review.review
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-gray-600 relative">
                    <button className="text-gray-500 hover:text-gray-700" onClick={() => handleActionClick(review.id)}>
                      <span className="text-gray-500 mx-2">...</span>
                    </button>
                    {actionMenuOpen === review.id && (
                      <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {editReviewId === review.id ? (
                          <button 
                            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                            onClick={handleSaveEdit}
                          >
                            Save
                          </button>
                        ) : (
                          <button 
                            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                            onClick={() => handleEditReview(review.id, review.review)}
                          >
                            Edit
                          </button>
                        )}
                        <button 
                          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
                          onClick={() => handleDeleteReview(review.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {indexOfFirstReview + 1} to {Math.min(indexOfLastReview, filteredReviews.length)} of {filteredReviews.length} results
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`mx-2 px-3 py-1 rounded ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
              <button
                key={pageNumber}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === pageNumber ? 'bg-gray-300 text-gray-700 font-semibold' : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`mx-2 px-3 py-1 rounded ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
