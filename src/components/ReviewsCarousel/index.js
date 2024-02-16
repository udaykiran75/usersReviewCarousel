import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onChangeReviewLeft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onChangeReviewRight = () => {
    const {index} = this.state
    if (index < 4) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    const reviewItem = reviewsList[index]
    const {imgUrl, username, companyName, description} = reviewItem

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} className="userImage" alt={username} />
          <div className="arrow-container">
            <button
              className="arrowIcon"
              onClick={this.onChangeReviewLeft}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left Arrow"
                className="icon"
              />
            </button>
            <p className="userName">{username}</p>
            <button
              className="arrowIcon"
              onClick={this.onChangeReviewRight}
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right Arrow"
                className="icon"
              />
            </button>
          </div>
          <p className="description">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
