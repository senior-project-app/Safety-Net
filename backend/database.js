import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import {AppState} from "react-native";

const supabaseUrl = "https://aauuhbavzvsmupbasznk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhdXVoYmF2enZzbXVwYmFzem5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2MjAxNDEsImV4cCI6MjAyODE5NjE0MX0.Wivm4XkbyUH6j_59_3caNbK-KfOzeO-yz4jDMVaCFA4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
})