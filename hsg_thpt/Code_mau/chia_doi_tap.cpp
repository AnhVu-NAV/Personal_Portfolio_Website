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

vector<ll> sums(const vector<ll>&a){
    vector<ll>v{0};
    for(ll x:a){size_t m=v.size();for(size_t i=0;i<m;i++)v.push_back(v[i]+x);}
    return v;
}
int main(){
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int n;ll S;cin>>n>>S;vector<ll>a(n/2),b(n-n/2);
    for(ll&x:a)cin>>x;for(ll&x:b)cin>>x;
    auto l=sums(a),r=sums(b);sort(r.begin(),r.end());ll ans=0;
    for(ll x:l)if(x<=S){auto it=upper_bound(r.begin(),r.end(),S-x);
        if(it!=r.begin())ans=max(ans,x+*prev(it));}
    cout<<ans<<'\n';
}
