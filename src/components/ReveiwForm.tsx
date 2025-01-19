import { useState } from 'react';
import { client } from '../sanity/lib/client';
interface ProductsProps {
    productId: any; // New prop to pass category name
  }
  
function Products({ productId }: ProductsProps) {
  
  const [formData, setFormData] = useState({
    name: '',
    rating: 1,
    comment: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Create a new review document and reference the productId
      const newReview={
        _type: 'review',
        name: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        product: {
          _type: 'reference',
          _ref: productId,
        },
      };
      const response = await client.create(newReview);
      console.log(response)
      setStatus('Review submitted successfully!');
      setFormData({
        name: '',
        rating: 1,
        comment: '',
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      setStatus('Error: Could not submit your review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} Star{value > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Products;
