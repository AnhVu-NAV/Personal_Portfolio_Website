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
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int n;ll k;cin>>n>>k;
    unordered_map<ll,ll>f;f.reserve(2*n+1);f[0]=1;
    ll s=0,ans=0;
    for(int i=0;i<n;i++){ll x;cin>>x;s+=x;auto it=f.find(s-k);if(it!=f.end())ans+=it->second;f[s]++;}
    cout<<ans<<'\n';
}
