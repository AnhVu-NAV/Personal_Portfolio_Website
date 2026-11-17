#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

int main(){
    int n;cin>>n;vector<ll>h(n+1);for(int i=0;i<n;i++)cin>>h[i];
    vector<int>st;ll ans=0;
    for(int i=0;i<=n;i++){
        while(!st.empty() && h[st.back()]>h[i]){
            ll height=h[st.back()];st.pop_back();
            int left=st.empty()?-1:st.back();
            ans=max(ans,height*(i-left-1));
        }
        st.push_back(i);
    }
    cout<<ans<<'\n';
}
