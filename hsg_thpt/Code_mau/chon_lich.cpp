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
    int n;cin>>n;vector<pair<ll,ll>> v;
    for(int i=0;i<n;i++){ll l,r;cin>>l>>r;v.push_back({r,l});}
    sort(v.begin(),v.end());
    ll end=numeric_limits<ll>::lowest();int ans=0;
    for(auto [r,l]:v)if(l>=end){ans++;end=r;}
    cout<<ans<<'\n';
}
