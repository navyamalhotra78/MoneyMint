import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid>
          <Grid item xs={12} md={6} xl={3} ml={42}>
            <VuiTypography color="white" fontWeight="bold" style={{ fontSize: '50px' }}>
              Welcome to Money Mint.
            </VuiTypography>
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={12} md={6} xl={3} ml={55}>
            <VuiTypography color="white" style={{ fontSize: '20px' }}>
              Your one stop personal financial tracker.
            </VuiTypography>
          </Grid>
        </Grid>
        <Grid>
          <Grid item>
            <VuiTypography color="white" style={{ fontSize: '22px' }} ml={5} mr={5} mt={5} mb={3}>
            Financial literacy is essential in the modern world as it empowers individuals to make informed
            decisions about managing their money, saving, and investing. Understanding financial concepts like 
            budgeting, interest rates, and credit can help people avoid debt and achieve financial stability. 
            In an era where financial products are increasingly complex, financial literacy enables individuals 
            to navigate these options and plan for the future. Having a financial tracker is crucial as it 
            provides a clear overview of income, expenses, and savings, helping individuals stay on top of 
            their finances. This tool aids in setting and achieving financial goals, ensuring better financial 
            health and security.
            </VuiTypography>
          </Grid>
        </Grid>
        <Grid>
          <Grid item>
            <VuiTypography color="white" style={{ fontSize: '22px' }} ml={5} mr={5} mt={5} mb={3}>
              Features MoneyMint offers to help you stay on top of your finances-
              <VuiTypography color="white" style={{ fontSize: '22px' }} ml={5} mr={5} mt={5} mb={3}>
              <ul>
              <li>Personalized Financial Dashboard: A centralized dashboard where users can input and track 
                their financial goals, income, expenses, and savings preferences.
              </li>
              <li>Spending Analysis: Tools to analyze users' spending patterns and identify areas where they 
                can potentially save money.
              </li>
              <li>Budgeting Tools: Features to help users create and stick to a budget, with alerts for 
                overspending or upcoming bills.
              </li>
              <li>Financial Education: AIML chatbot to answer users' financial questions, explain financial 
                concepts, and offer tips for improving financial literacy.
              </li>
              <li>Goal Tracking: Progress tracking for financial goals, with milestones and reminders to help 
                users stay on track.
              </li>
              <li>Customizable Alerts: Options for users to set up customizable alerts for important financial 
                events.
              </li>
              <li>Financial Calculators: Tools for calculating loan payments, savings projections, retirement 
                needs, and other financial metrics.
              </li>
              <li>Document Management: Secure storage for important financial documents.
              </li>
              </ul>
              </VuiTypography>
            </VuiTypography>
          </Grid>
        </Grid>
        <Grid>
          <Grid item>
            <Link to="/authentication/sign up/index.js">
            <VuiTypography color="white" style={{ fontSize: '22px' }} ml={42} mr={5} mt={5} mb={3}>
              Sign up today and get started on your journey of financial mastery!
            </VuiTypography>
            </Link>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
