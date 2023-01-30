import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const HistoryItems = props => {
  const {itemDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <div className="name-and-url-container">
        <p className="time-para">{timeAccessed}</p>
        <img src={logoUrl} className="logo-image" alt="domain logo" />
        <p className="title-para">{title}</p>
        <p className="domain-para">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filteredHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  deleteItem = id => {
    const {historyList} = this.state
    const updateDetailedList = historyList.filter(each => each.id !== id)
    this.setState({historyList: updateDetailedList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.filteredHistoryList()

    return (
      <div className="main-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-icon"
                alt="search"
              />
            </div>
            <input
              type="search"
              className="search-bar"
              value={searchInput}
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-container">
            <div className="history-container">
              {filteredHistoryList.length === 0 ? (
                <p>There is no history to show</p>
              ) : (
                <ul>
                  {filteredHistoryList.map(eachItem => (
                    <HistoryItems
                      itemDetails={eachItem}
                      deleteItem={this.deleteItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
