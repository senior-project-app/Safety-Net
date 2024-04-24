import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import {AppState} from "react-native";
const supabaseUrl = 'https://fmnmlvzhfldmmquksulq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbm1sdnpoZmxkbW1xdWtzdWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2ODU3NDYsImV4cCI6MjAyODI2MTc0Nn0.UXD5ZulLG9l7BA-2RRfwfTrF_1LiZW0hUrWARKUx1mI';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

export const supabaseAccountCreator = createClient(supabaseUrl, supabaseKey);

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})