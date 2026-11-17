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
    int n,k1,k2;ll b;cin>>n>>b>>k1>>k2;
    const ll INF=(1LL<<62);
    vector<vector<ll>>dp(k1+1,vector<ll>(k2+1,INF));dp[0][0]=0;
    for(int i=0;i<n;i++){
        ll a;cin>>a;
        vector<vector<ll>>ndp(k1+1,vector<ll>(k2+1,INF));
        ll both=min(max(0LL,a/2-b),max(0LL,a-b)/2);
        for(int u=0;u<=min(i,k1);u++)for(int v=0;v<=min(i,k2);v++)if(dp[u][v]!=INF){
            auto relax=[&](int x,int y,ll z){if(x<=k1&&y<=k2)ndp[x][y]=min(ndp[x][y],dp[u][v]+z);};
            relax(u,v,a);relax(u+1,v,a/2);relax(u,v+1,max(0LL,a-b));relax(u+1,v+1,both);
        }
        dp.swap(ndp);
    }
    ll ans=INF;for(auto&row:dp)for(ll x:row)ans=min(ans,x);cout<<ans<<'\n';
}
