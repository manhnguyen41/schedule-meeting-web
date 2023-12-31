import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login/Login.jsx'
import {useSelector} from 'react-redux'
import Settings from './pages/Settings/Settings.jsx'
import ProfileSetting from './pages/Settings/ProfileSetting.jsx'
import CalendarSetting from './pages/Settings/CalendarSetting.jsx'
import SignUp from './pages/Login/SignUp.jsx'
import MeetingCreate from './pages/meeting/MeetingCreate.jsx'
import Meeting from './pages/meeting/Meeting.jsx'
import MeetingVote from './pages/meeting/MeetingVote.jsx'
import MeetingPreview from './pages/meeting/MeetingPreview.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/profile" element={<ProfileSetting />} />
          <Route path="settings/calendar" element={<CalendarSetting />} />
          <Route path="meeting/organize/groups" element={<MeetingCreate isEdit={false}/>} />
          <Route path="meeting/organize/id/:meetingId/edit" element={<MeetingCreate isEdit={true}/>} />
          <Route path="meeting/organize/id/:meetingId" element={<Meeting />} />
          <Route path="meeting/organize/id/:meetingId/vote" element={<MeetingVote />} />
          <Route path="meeting/organize/id/:meetingId/preview" element={<MeetingPreview/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
