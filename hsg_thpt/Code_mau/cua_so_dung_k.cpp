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
    int n,k;cin>>n>>k;vector<ll>a(n);for(ll&x:a)cin>>x;
    map<ll,int>cnt;int l=0,ans=0;
    for(int r=0;r<n;r++){
        cnt[a[r]]++;
        while((int)cnt.size()>k){if(--cnt[a[l]]==0)cnt.erase(a[l]);l++;}
        if((int)cnt.size()==k)ans=max(ans,r-l+1);
    }
    cout<<ans<<'\n';
}
