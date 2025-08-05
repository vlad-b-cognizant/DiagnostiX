/**
 * DiagnostiX Web App
 * Mobile-responsive React Native Web application
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

// API Configuration
const API_BASE_URL = 'http://localhost:5090';

// Types
interface AppInfo {
  appName: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch app info from API
  const fetchAppInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/api/home`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as AppInfo;
      setAppInfo(data);
    } catch (err) {
      console.error('Failed to fetch app info:', err);
      setError(err instanceof Error ? err.message : 'Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAppInfo();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
              DiagnostiX
            </Text>
            <Text style={[styles.subtitle, { color: isDarkMode ? '#ccc' : '#666' }]}>
              Web Application
            </Text>
          </View>

          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                🎉 {loading ? 'Loading...' : error ? 'Connection Error' : (appInfo?.appName || 'Hello World!')}
              </Text>
              <Text style={styles.cardText}>
                {loading 
                  ? 'Connecting to the server...' 
                  : error 
                    ? `Unable to connect to the API server: ${error}. Make sure the .NET 8 API is running at ${API_BASE_URL}`
                    : `Welcome to DiagnostiX - your responsive web application built with React Native Web! Successfully connected to the .NET 8 API backend.`
                }
              </Text>
              {error && (
                <Text style={[styles.cardText, { marginTop: 10, fontStyle: 'italic' }]}>
                  💡 Tip: Start the backend API by running "dotnet run --project src/DiagnostiX.Api" in the server directory.
                </Text>
              )}
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>📱 Mobile-Responsive</Text>
              <Text style={styles.cardText}>
                This application is designed to work seamlessly across desktop and mobile devices.
                Try resizing your browser window or accessing from your phone!
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>🚀 Getting Started</Text>
              <Text style={styles.cardText}>
                Start building your DiagnostiX features here. This is a clean, modern foundation
                for your web application.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>⚡ Fast Development</Text>
              <Text style={styles.cardText}>
                Hot reloading is enabled. Make changes to see them instantly reflected in your browser.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.8,
  },
  content: {
    gap: 20,
  },
  card: {
    backgroundColor: '#007acc',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    opacity: 0.9,
  },
});

export default App;
