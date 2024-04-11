import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import {AppState} from "react-native";

const supabaseUrl = "https://fmnmlvzhfldmmquksulq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbm1sdnpoZmxkbW1xdWtzdWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2ODU3NDYsImV4cCI6MjAyODI2MTc0Nn0.UXD5ZulLG9l7BA-2RRfwfTrF_1LiZW0hUrWARKUx1mI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

export const storeUserMetadata = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('userData', jsonValue);
    } catch (e) {
    }
};

export const getUserMetadata = async () => {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const fetchUserInfo = async () => {
    const { error } = await supabase.from('parent_users')
        .select()
        .then((res) => {
            storeUserMetadata(res.data[0]);
        })
}

export const getUserChildren = async () => {
    const { error } = await supabase.from('parent_users')
        .select()
        .then((res) => {
            storeUserMetadata(res.data[0]);
        })
}
export const supabaseAccountCreator = createClient(supabaseUrl, supabaseAnonKey);

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});